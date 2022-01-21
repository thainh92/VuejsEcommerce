<template>
  <div>
    <h1>Products</h1>
    <a-form class="product__search-form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSearch">
      <a-form-item>
        <a-input class="product__search-form-input" placeholder="Seach by name" v-model="params.name"/>
      </a-form-item>
      <a-form-item>
        <a-input class="product__search-form-input" placeholder="Seach by min price" v-model="params.minPrice"/>
      </a-form-item>
      <a-form-item>
        <a-input class="product__search-form-input" placeholder="Seach by max price" v-model="params.maxPrice"/>
      </a-form-item>
      <a-form-item>
        <a-select
            placeholder="Search by category"
            v-model="params.categoryId"
            style="width: 350px"
        >
          <a-select-option
              v-for="cate in categories" :key="cate.id" :value="cate.id">
            {{ cate.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <br/>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Search
        </a-button>
      </a-form-item>
    </a-form>
    <a-card>
      <a-table style="margin-bottom: 15px" :pagination="false" :columns="columns" :data-source="data">
        <div slot="thumbnail" slot-scope="text">
          <!--<img :src="text.split(',')[0]" style="width: 100%">-->
          <img :src="text" style="width: 100%">
        </div>

        <div slot="action" slot-scope="text, record">
          <a-button type="danger" @click="showConfirm(record.id)" style="margin-right: 10px">Delete</a-button>
          <!--<a-button type="primary"  @click="getProductDetail(record.id)">Edit</a-button>-->
          <a-button type="primary">
            <a :href="'/products/form/'+record.id">Edit</a>
          </a-button>
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
import CategoryService from "../../../service/CategoryService";


export default {
  data() {
    return {
      data: [],
      columns: columns,
      totalRecord: undefined,
      categories: [],
      params: {
        pageSize: 10,
        page: 1,
        name: "",
        // category: "",
        minPrice: undefined,
        maxPrice: undefined,
        price: undefined,
        categoryId: undefined
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
          .catch(err => console.log(err));
      CategoryService.getAll()
          .then(res => {
            console.log(res.data.data)
            this.categories = res.data.data
            console.log(this.categories);
          })
          .catch(e => console.log(e))
    },

    showConfirm(id) {
      this.$confirm({
        title: 'Do you want delete this product',
        onOk: () => {
          this.deleteProduct(id)
        },
        onCancel() {
          console.log("Cancel")
        }
      })
    },

    deleteProduct(id) {
      ProductService.deleteById(id).then(res => {
        console.log(res);
        this.getProducts();
      }).catch();

    },

    handleSearch(e) {
      e.preventDefault();
      this.params.page = 1;
      this.getProducts();
    },

    // getProductDetail(id) {
    //   ProductService.findById(id).then(response => {
    //     console.log(response);
    //     this.$router.push({name: 'productCreate'});
    //     alert(id);
    //   });
    // },

    onShowSizeChange(current, pageSize) {
      this.params.pageSize = pageSize
      this.getProducts()
    },

    changePage(current) {
      this.params.page = current;
      this.getProducts();
    },

    searchByName(values) {
      ProductService.filterProductByMinPrice(values);
      alert(values);
      console.log(this.params.search);
    },

    handleCate(cate) {
      this.params.categoryId = parseInt(cate);
      this.getProducts();
    },

  }
};
</script>

<style>
.product__search-form {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.product__search-form-input {
  width: 350px;
}
</style>
