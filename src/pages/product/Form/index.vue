<template>
  <a-card>
    <a-form :form="this.form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item hidden="true">
        <a-input v-model="params.id"/>
      </a-form-item>
      <a-form-item label="Name">
        <a-input v-decorator="['name', {
                   initialValue: params.name,
                   rules: [{ required: true, message: 'Please input your name!' }] }]"/>
      </a-form-item>

      <a-form-item label="Price">
        <a-input v-model="params.price"
                 v-decorator="['price', {
                   initialValue: params.price,
                   rules: [{ required: true, message: 'Please input price!' }] }]"/>
      </a-form-item>
      <!--category id-->
      <a-form-item label="Category ID">
        <a-select  v-model="params.categoryId" style="width: 100%" @change="handleChange">
          <a-select-option
              v-for="cate in categories" :key="cate.id" :value="cate.id" >
            {{ cate.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <!--description-->
      <a-form-item label="Description">
        <a-input v-decorator="['description', {
                   initialValue: params.description,
                   rules: [{ required: true, message: 'Please input description!' }] }]"/>
      </a-form-item>
      <!--detail-->
      <a-form-item label="Detail">
        <a-input v-decorator="['detail', {
          initialValue: params.detail,
          rules: [{ required: true, message: 'Please input detail!' }] }]"/>
      </a-form-item>
      <!--thumbnail-->
      <a-form-item label="Thumbnail">
        <a-input v-decorator="['thumbnail', {
                   initialValue: params.thumbnail,
                   rules: [{ required: true, message: 'Please input thumbnail!' }] }]"/>
      </a-form-item>
      <!--status-->
<!--      <a-form-item label="Status">-->
<!--        <a-input v-decorator="['status', {-->
<!--                   initialValue: params.status,-->
<!--                   rules: [{ required: true, message: 'Please input status!' }] }]"/>-->
<!--      </a-form-item>-->
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>

import CategoryService from "../../../service/CategoryService";
import ProductService from "../../../service/ProductService";

export default {
  data() {
    return {
      id: undefined,
      idProductGet: undefined,
      productDetail: [],
      categories: [],
      formLayout: 'horizontal',
      categoryId: undefined,
      form: this.$form.createForm(this, {name: 'coordinated'}),
      params: {
        name: undefined,
        price: undefined,
        categoryId: undefined,
        description: undefined,
        detail: undefined,
        thumbnail: undefined,
        // status: undefined,
        minPrice: undefined,
        maxPrice: undefined
      }
    };
  },
  created() {
    if (this.$router.currentRoute.params.id) {
      this.idProductGet = this.$router.currentRoute.params.id
      this.getProduct();
    }
    this.getCategory();

  }
  ,
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (this.idProductGet != null) {
          values.id = this.idProductGet;
          values.categoryId = this.categoryId;
          console.log("values: ", values)
          ProductService.updateProduct(values);
        }
        if (!err) {
          values.categoryId = this.categoryId
          console.log("values: ", values)
          ProductService.addProduct(values);
        }
        this.getProduct();
        this.$router.push({name: 'productList'});
      });
    },

    async getProduct() {
      let dataGet = await ProductService.findById(this.idProductGet);
      this.params.id = dataGet.data.data.id;
      this.params.categoryId = dataGet.data.data.categoryId;
      this.params.name = dataGet.data.data.name;
      this.params.price = dataGet.data.data.price;
      this.params.description = dataGet.data.data.description;
      this.params.detail = dataGet.data.data.detail;
      this.params.thumbnail = dataGet.data.data.thumbnail;
      // this.params.status = dataGet.data.data.status;
    },

    getCategory() {
      CategoryService.getAll()
          .then(res => {
            console.log(res.data.data)
            this.categories = res.data.data
            console.log(this.categories);
          })
          .catch(e => console.log(e))
    },

    handleChange(value) {
      this.categoryId = value;
    },
  },
};
</script>