
import { Form, Input, Button, Checkbox, Card, Row, Col, Upload, Select } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../api'
import {UploadOutlined} from '@ant-design/icons';
import Layout from '../components/Layout';

const AddPost = () => {
  const navigate = useNavigate();
  const onFinish = async ({typeId,...values}) => {
    try {
        const res = await api.post('/posts', {
            typeId : Number(typeId),
            ...values,
        })

      alert('Başarıyla eklendi');
      navigate("/profile");
  
     } catch(err) {
       alert(err.message);
     }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <Layout>
   <LoginWrapper>
        <Card title="Add Post" style={{width: 700}}>
          <Form
            name="basic"
            
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"

          >
            <Form.Item
              label="Post Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Post Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Post Type" name="typeId" rules={[{ required: true, message: 'Please input your Post Type!' }]}
>
              <Select>
                <Select.Option value="1">Movie</Select.Option>
                <Select.Option value="2">Actor</Select.Option>

              </Select>
            </Form.Item>

            <Form.Item
              label="Post Image"
              name="imageName"
              rules={[{ required: true, message: 'Please input your Post Image!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </LoginWrapper>
      </Layout>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

export default AddPost;