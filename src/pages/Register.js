
import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api'

const Register = () => {
    const navigate = useNavigate();
  const onFinish = async ({password, rePassword,...values}) => {
      
    if(password !== rePassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }
   try {
      const res = await api.post('/users/register', {
        ...values,
        password
      })
      alert("Kayıt başarılı!!");
      navigate("/login");

   } catch(err) {
     console.log(err)
   }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
   <RegisterWrapper>
        <Card title="Register" style={{width: 500}}>
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
              rules={[{ required: true, message: 'Please input your email!', min: 8}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="UserName"
              name="userName"
              rules={[{ required: true, message: 'Please input your username' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="FirstName"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="LastName"
              name="lastName"
              rules={[{  message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!', min: 8 }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Re-Password"
              name="rePassword"
              rules={[{ required: true, message: 'Please input your re password!',min: 8 }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Register;