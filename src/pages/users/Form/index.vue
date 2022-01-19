<template>
  <a-card>
    <a-form layout="vertical">

      <a-form-item label="Username">
        <a-input v-model="form.username" placeholder="input placeholder" />
      </a-form-item>

      <a-form-item label="Email">
        <a-input v-model="form.email" placeholder="input placeholder" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary">
          Submit
        </a-button>
      </a-form-item>

    </a-form>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      id: undefined,
      form: {
        username: undefined,
        email: undefined
      }
    };
  },
  created() {
    this.id = this.$router.currentRoute.params.id;
    if (this.id) {
      //axios.... => get user detail
      this.form = {
        username: 'vanngoc',
        email: 'vanngoc@tasc.vn'
      }
    }
  },
  methods: {
  },
};
</script>