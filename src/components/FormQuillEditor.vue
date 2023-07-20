<template>
   
   <div class="block text-sm px-2 mb-1 mt-2">
      <span
         :class="[labelFontWeight,labelFontSize]"
         class="uppercase text-purple-700"
      >
         {{ label }}
         <span v-if="required">
            <span class="text-red-500">*</span>
         </span>
      </span>
      
      <div 
         class="block w-full border border-t-0 rounded-md rounded-t-none mt-1 px-2 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple  form-input"
         :placeholder="placeholder"
       >
         <slot name="custom-toolbar"/>
         <div v-html="modelValue"></div>
      </div>     
   </div>
</template>


<script>
import Quill from 'quill';
import axios from 'axios'
export default {
   name: "FormQuillEditor",
   emits: ["update:modelValue","change"],
   
   setup: () => {
    
      
  }, 
   props: {
      modelValue:{},
      toolbar: {
         type: Array,
         default: 
         [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['image', 'video', 'link'], 

            ['clean']     
         ]      
      },
      label: {
         type: String,
         default: "Input Label",
      },
      required: {
         type: Boolean,
         default: false,
      }, 
      readOnly: {
         type: Boolean,
         default: false,
      },
      placeholder: {
         type: String,
         default: "input label",
      }, 
      textSize: {
         type: String,
         default: "text-sm",
      },
      labelSize: {
         type: String,
         default: "text-xs",
      },
      fontWeight: {
         type: String,
         default: "font-semibold",
      },    
   },
   mounted() {
    let customToolbar = this.$slots["custom-toolbar"];
    let customToolbarHTML = customToolbar ? customToolbar[0].elm : false;
    let quillCustomToolbarId = 'custom-quilljs-toolbar'
    if(customToolbarHTML) {
      customToolbarHTML.id = quillCustomToolbarId;
    }
    //this.$el.children[1], //(when this.$el.children[1] template is inside a element like a div)
      //let quill = new Quill(this.$el, {
      let quill = new Quill(this.$el.children[1], {
         theme: 'snow',
         placeholder: this.placeholder,
         readOnly:this.readOnly,
         modules: {
            toolbar: this.toolbar,
            imageUploader:{
               upload: (file) => {
                return new Promise((resolve, reject) => {
                     const formData = new FormData();
                     formData.append("file", file);
                     formData.append("path", "content");

                     axios.post('content/upload-image', formData, {
                              headers: {
                                 'Content-Type': 'multipart/form-data'
                              }
                        })
                     .then(response => {
                           resolve(response.data.data.file_url) //return data to caller function
                     })
                     .catch(err => {
                           ////return error data to caller function 
                           reject(err)
                     });                 
                  });
               
               }
            },
            blotFormatter:{},
         }
      });
      
      quill.on('text-change', (delta, oldDelta, source) => {
         let html = quill.root.innerHTML;
         this.$emit('change', html, delta, oldDelta, source);
      });
   },
   computed: {
      value: {
         get() {
            return this.modelValue;
         },
         set(value) {
            this.$emit("update:modelValue", value);
         },
      },
      labelFontWeight() {
         return `${this.fontWeight}`;
      },
      labelFontSize() {
         return `${this.labelSize}`;
      },
      inputFontSize() {
         return `${this.textSize}`;
      },
   },
};
</script>
<style>
   .ql-container{
      background: #fff;
      height: 100%;
   }
   .ql-editor{
      min-height:200px;
  }
  .ql-container.ql-snow {
     border: 1px solid #ccc;
   }
</style>