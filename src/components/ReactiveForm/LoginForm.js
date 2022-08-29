import { useForm } from "./useForm";
import '../ReactiveForm/forms.css'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
}

let styles ={
    fontWeight: "regular",
    color: "#dc3545"
}

const validationsForm = (form) =>{

    let errors ={}
    let regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(!form.name.trim()){
        errors.name ="El campo 'Nombre' es requerido";
    }

    if(!form.email.trim()){
        errors.email ="El campo 'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
            errors.email ="El campo 'Email' no es valido"; 
        }

    if(!form.subject.trim()){
        errors.subject ="El campo 'Asunto' es requerido";
    }

    if(!form.comments.trim()){
        errors.comments ="El campo 'Comentarios' es requerido";
    }

    return errors
}

const LoginForm = () => {

    const {form,
            error,
            loading,
            response,
            handleChange,
            handleBlur,
            handleSubmit} = useForm(initialForm, validationsForm)

    return(
        <div className="loginForm">
            <form className="LoginForm" onSubmit={handleSubmit}>
                <h2>Formulario ejemplo de inicio de sesión</h2>
                <input type="text" name="name" 
                        placeholder="Escribe tu nombre" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.name}/>
                        {error.name && <p style={styles}>{error.name}</p>}

                <input type="text" name="email" 
                        placeholder="Escribe tu email" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.email}/>
                        {error.email && <p style={styles}>{error.email}</p>}

                <input type="text" name="subject" 
                        placeholder="Escribe tu asunto" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.subject}/>
                        {error.subject && <p style={styles}>{error.subject}</p>}

                <textarea name="comments" 
                        cols="50" 
                        rows="1" 
                        placeholder="Esribe tus comentarios" 
                        value={form.comments} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        required>
                        </textarea>
                        {error.comments && <p style={styles}>{error.comments}</p>}

                        <input type="submit" value="enviar"/>
                </form>
            </div>
        )
    }

export default LoginForm
