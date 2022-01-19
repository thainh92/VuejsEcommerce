<template>
  <a-card>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">

      <a-form-item label="Name">
        <a-input v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"/>
      </a-form-item>

      <a-form-item label="Price">
        <a-input v-decorator="['price', { rules: [{ required: true, message: 'Please input price!' }] }]"/>
      </a-form-item>
      <!--category id-->
      <a-form-item label="Category ID">
        <a-select style="width: 100%" @change="handleChange">
          <a-select-option
              v-for="cate in categories" :key="cate.id" :value="cate.id">
            {{cate.name}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <!--description-->
      <a-form-item label="Description">
        <a-input v-decorator="['description', { rules: [{ required: true, message: 'Please input description!' }] }]"/>
      </a-form-item>
      <!--detail-->
      <a-form-item label="Detail">
        <a-input v-decorator="['detail', { rules: [{ required: true, message: 'Please input detail!' }] }]"/>
      </a-form-item>
      <!--thumbnail-->
      <a-form-item label="Thumbnail">
        <a-input v-decorator="['thumbnail', { rules: [{ required: true, message: 'Please input thumbnail!' }] }]"/>
      </a-form-item>
      <!--status-->
      <a-form-item label="Status">
        <a-input v-decorator="['status', { rules: [{ required: true, message: 'Please input status!' }] }]"/>
      </a-form-item>
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
      categories:[],
      formLayout: 'horizontal',
      category_id:undefined,
      form: this.$form.createForm(this, {name: 'coordinated'}),
    };
  },
  created() {
    this.getCategory()
  }
  ,
  methods: {

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          values.category_id = this.category_id
          console.log('Received values of form: ', values);
          ProductService.addProduct(values);
          this.$router.push({name:'productList'});
        }
      });
    },

    getCategory() {
      CategoryService.getAll()
          .then(res=>{
            console.log(res.data.data)
            this.categories = res.data.data
            console.log(this.categories);
          })
          .catch(e=>console.log(e))
    },

    handleChange(value) {
      this.category_id = value;
    },
  },
};
</script>