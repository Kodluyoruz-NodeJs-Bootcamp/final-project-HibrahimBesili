
import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../api'

const Login = () => {
    const navigate = useNavigate();
  const onFinish = async ({...values}) => {
    try {
        const res = await api.post('/users/login', {
          ...values,
        })
        localStorage.setItem("token",res.data.token);
        navigate("/");
  
     } catch(err) {
       console.log(err)
     }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
   <LoginWrapper>
        <Card title="Login" style={{width: 500}}>
          <Form
            name="basic"
            
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"

          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Login;