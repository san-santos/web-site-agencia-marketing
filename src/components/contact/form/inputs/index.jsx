import React from 'react';
import { Label, Labelname, Option, Button, Authorize, Textauthorize } from './styled';
import './form.css';
import schema from '../schema';
import { Formik, Field, Form } from 'formik';

const Inputs = () => {

    const onSubmit = (values, actions) => {
            console.log('SUBMIT', values)
    }    

     return (
        <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
            name: '',
            email: '',
            whatsapp: '',
            select: '',
            message: '',
            check: '',            
        }}
        render={({values, errors, touched}) => (

       
        <Form className='formDimensions'>
        
            <Labelname>Nome</Labelname>
            <Field 
                type="text" 
                placeholder="Nome completo" 
                name='name' 
                className='inputs'
            />
            {errors.name && touched.name &&(
                <span>{errors.name}</span>
            )}        
            <Label>Email</Label>
            <Field 
                type="text" 
                placeholder="seuemail@seuemail.com.br" 
                name='email' 
                className='inputs'
            />
            {errors.email && touched.email && (
                <span>{errors.email}</span>
            )}
             
            <Label>WhatsApp</Label>
            <Field 
                type="text" 
                placeholder="Número do celular" 
                name='whatsapp' 
                className='inputs'
            />
            {errors.whatsapp && touched.whatsapp && (
                <span>{errors.whatsapp}</span>
            )}
            
            <Label>Selecione o assunto</Label>
            <Field
                name="select"
                component="select"            
                className='inputs'
            >  
                <Option >Selecione...</Option>      
                <Option value="Sites e E-commerces">Sites e E-commerces</Option>
                <Option value="SEO">SEO</Option>
                <Option value="Google ADS">Google ADS</Option>
                <Option value="Marketing Digital">Marketing Digital</Option>
                <Option value="Produção de Conteúdo">Produção de Conteúdo</Option>
                <Option value="Design Gráfico">Design Gráfico</Option>
                <Option value="Acessoria de Imprensa">Acessoria de Imprensa</Option>
                <Option value="Foto e Vídeo">Foto e Vídeo</Option>
            </Field>
            {errors.select && touched.select && (
                <span>{errors.select}</span>
            )}
            <Label>Mensagem</Label>
            <Field
                name="message"
                component="textarea"
                className='areatext'
            />     
            {errors.message && touched.message && (
                <span>{errors.message}</span>
            )}
            <Authorize>
                <Field 
                    type="checkbox" 
                    name="check" 
                    className='checkbox' 
                />
                <Textauthorize>
                    Ao enviar meus dados declaro estar ciente e de acordo com 
                    a política de privacidade deste site, bem como autorizo 
                    que a AGC3! me contate.
                </Textauthorize>                
            </Authorize>
            {errors.check && touched.check && (
                <span>{errors.check}</span>
            )}
           
            <Button type='submit'>Enviar Mensagem</Button>       
        </Form>
        )}
        />        
    )
};

export default Inputs;