import { Button, Checkbox, DatePicker, Form, Input, message } from 'antd'
import PageHeader from '../components/ui/PageHeader'

type FormValues = {
    name: string
    email: string
    birthday?: string
    agree: boolean
}

export default function Forms() {
    const [form] = Form.useForm<FormValues>()

    const onFinish = (values: FormValues) => {
        // В реальном проекте — отправка данных на сервер
        message.success(`Успешно! Имя: ${values.name}, Email: ${values.email}`)
        form.resetFields()
    }

    return (
        <>
            <PageHeader title="Формы" subtitle="Валидация, обязательные поля и DatePicker." />

            <Form
                form={form}
                layout="vertical"
                style={{ maxWidth: 520 }}
                onFinish={onFinish}
                initialValues={{ agree: false }}
            >
                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[
                        { required: true, message: 'Введите имя' },
                        { min: 2, message: 'Минимум 2 символа' }
                    ]}
                >
                    <Input placeholder="Иван Иванов" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Введите email' },
                        { type: 'email', message: 'Некорректный email' }
                    ]}
                >
                    <Input placeholder="example@mail.com" />
                </Form.Item>

                <Form.Item label="Дата рождения" name="birthday">
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="agree"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Нужно согласие с условиями'))
                        }
                    ]}
                >
                    <Checkbox>Согласен с условиями</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
