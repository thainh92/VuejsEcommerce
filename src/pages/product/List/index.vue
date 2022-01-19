<template>
  <div>
    <h1>Products</h1>
    <a-card>
      <a-table style="margin-bottom: 15px" :pagination="false" :columns="columns" :data-source="data">
        <div slot="thumbnail" slot-scope="text">
          <img :src="text.split(',')[0]" style="width: 100%">
        </div>
        <div slot="action" slot-scope="text, record">
          <a-button type="danger" @click="deleteProduct(record.id)" style="margin-right: 10px">Delete</a-button>
          <a-button type="primary">Edit</a-button>
        </div>
      </a-table>
      <div>
        <a-pagination
            v-model="params.page"
            show-size-changer
            :page-size.sync="params.pageSize"
            :total="totalRecord"
            @showSizeChange="onShowSizeChange"
            @change="changePage"
        />
      </div>
    </a-card>
  </div>
</template>
<script>

import {columns} from "@/pages/product/columns";
import ProductService from "@/service/ProductService";


export default {
  data() {
    return {
      data: [],
      columns: columns,
      totalRecord: undefined,
      params: {
        pageSize: 10,
        page: 1,
        name: "",
        category: ""
      }
    };
  },
  created() {
    this.getProducts()
  }
  ,
  methods: {

    getProducts() {
      ProductService.getAll(this.params)
          .then(res => {
            this.data = res.data.data
            this.totalRecord = res.data.pagination.totalItems
            console.log("res: ", res)
          })
          .catch(err => console.log(err))
    },

    deleteProduct(id) {
      ProductService.deleteById(id).then(res => {
        console.log(res);
        this.getProducts();
      }).catch();

    },

    // updateProduct(id)

    onShowSizeChange(current, pageSize) {
      this.params.pageSize = pageSize
      this.getProducts()
    },

    changePage(current) {
      this.params.page = current;
      this.getProducts();
    },

  }
};
</script>
