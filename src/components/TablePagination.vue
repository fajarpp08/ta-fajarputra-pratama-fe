<template>
    <div class="grid px-2 py-3 text-xs tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-12 dark:text-gray-400 dark:bg-gray-800">
            <span class="flex items-center col-span-3 font-light">
                <slot name="filter" />
                <span class="text-main-theme pr-1"> {{ pagination.record_from }}</span>  -  <span class="text-main-theme  px-1 ">{{ pagination.record_to }}</span> from <span class="text-main-theme  px-1">{{ pagination.total_record }} </span> ENTRY
            </span>
            <span class="flex col-span-9 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                        <span v-if="pagination.current_page == 1" aria-disabled="true" aria-label="Previous" class="px-3 py-1 rounded-md text-main-theme rounded-l-lg focus:outline-none focus:shadow-outline-purple">

                            <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        </span>
                        <button v-else v-on:click.prevent="changePage(pagination.current_page - 1)"  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple transition ease-in-out duration-150"
                            aria-label="Previous">
                            <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div v-for="page in pagesNumber" :key="page">
                            <span aria-disabled="true">
                                <li>
                                    <span>
                                        <button v-if="page == pagination.current_page"  v-on:click.prevent="changePage(page)" class="px-3 py-1 text-white  bg-main-theme border border-r-0 border-main-theme rounded-md focus:outline-none focus:shadow-outline-purple transition ease-in-out duration-150" aria-label="go to {{ page }}">
                                            {{ page }}
                                        </button>
                                        <button  v-else   v-on:click.prevent="changePage(page)" class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            {{ page }}
                                        </button>
                                    </span>
                                </li>
                            </span>
                        </div>
                        <button v-if="pagination.current_page < pagination.last_page"
                            v-on:click.prevent="changePage(pagination.current_page + 1)" class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple transition ease-in-out duration-150" aria-label="next">
                            <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <span  v-else aria-disabled="true" aria-label="next" class="px-3 py-1 rounded-md text-main-theme rounded-l-lg focus:outline-none focus:shadow-outline-purple">
                            <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                        </span>
                    </ul>
                </nav>
            </span>

    </div>

</template>

<style scoped>
   .pagination {
       display: flex;
       list-style: none;
       justify-content: center;
   }
</style>

<script>
   export default{
      name: "TablePagination",
       props: {
           pagination: {
               type: Object,
               required: true
           },
           eachSide: {
               type: Number,
               default: 5,
               required: false
           }
       },

       computed: {
           pagesNumber() {
               let pagesArray = [];
               let firstPage = 1;
               let lastPage = this.pagination.last_page;

               if (this.eachSide !== '') {
                   if (this.pagination.current_page - this.eachSide > firstPage) {
                       firstPage = this.pagination.current_page - this.eachSide
                   }

                   if (this.eachSide + this.pagination.current_page < lastPage) {
                       lastPage = this.eachSide + this.pagination.current_page
                   }
               }

               if (firstPage !== 1) {
                   pagesArray.push(1);
               }

               for (let page = firstPage; page <= lastPage; page++) {
                   pagesArray.push(page);
               }

               if (lastPage !== this.pagination.last_page) {
                   pagesArray.push(this.pagination.last_page);
               }

               return pagesArray;
           }
       },

       methods: {
           changePage ( page ) {
               this.pagination.current_page = page;
               this.$emit('paginate');
           }
       }
   }
</script>
