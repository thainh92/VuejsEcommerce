<template>
  <div>
    <h1>hello</h1>
    <a-card>
      <a-table :columns="columns" :data-source="data">
        <span slot="amount" slot-scope="text, record">
          <p style="color: red">{{`${record.amount.toLocaleString('vi', {style : 'currency', currency : 'VND'})} hello`}}</p>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: {customRender: 'amount'},
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    amount: 100000,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    phone: "12345",
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    amount: 1123000,
    phone: "123457111",
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    amount: 1450000,
    phone: "12345000",
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
