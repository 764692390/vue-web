<template>
  <div class="reg">
    <router-link to="/">返回首页</router-link>
    <div class="reg-box">
      <Form :model="formItem" ref="formItem" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名称" prop="userName">
          <Input v-model="formItem.userName" placeholder="请输入用户名称..."></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
          <Input v-model="formItem.phone" placeholder="请输入手机号..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="formItem.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwordConfirm">
          <Input type="password" v-model="formItem.passwordConfirm" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem>
          <Button type="ghost" style="margin-right: 8px" @click="CancelFn">重置</Button>
          <Button type="primary" @click="regFn"> 提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  // 加载组件
  components: {},
  // 接受父级传输的数据
  props: [],
  // 本组件定义的数据
  data() {
    return {
      formItem: {
        userName: "",
        phone: "",
        password: "",
        passwordConfirm: ""
      },
      ruleValidate: {
        userName: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        passwordConfirm: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  // 组件创建之前
  created() {},
  //  组件创建完成
  mounted() {},
  // 组件内的方法
  methods: {
    // 提交
    regFn() {
      this.$refs.formItem.validate(valid => {
        if (valid) {
          this.$Spin.show();
          let data = this.formItem;
          this.$http
            .post("/user/register", data)
            .then(res => {
              this.$Spin.hide();
              if (res.data.errno == 0) {
                this.$Message.success("注册成功");
              } else {
                this.$Message.warning(res.data.errmsg);
              }
            })
            .catch(error => {
              this.$Spin.hide();
              this.$Message.error("注册失败");
            });
        } else {
          this.$Message.warning("请填写完整信息!");
        }
      });
    },
    // 重置
    CancelFn() {
      this.formItem = {
        userName: "",
        phone: "",
        password: "",
        passwordConfirm: ""
      };
    }
  }
};
</script>

<style lang="less">
.reg {
  text-align: center;
  .reg-box {
    width: 60%;
    margin: 60px auto;
  }
}
</style>
