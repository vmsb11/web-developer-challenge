import React from 'react';
import { connect } from 'react-redux';
import RoundedButton from '../components/RoundedButton';
import UploadButton from '../components/UploadButton';
import { toastr } from 'react-redux-toastr';
import { 
    addPost
} from '../store/actions';
import { 
    getFileExtension, 
    bytesToMB 
} from '../helpers/general_helpers';
import './PostForm.css';

class PostForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            message: '',
            photo: '',
            photoSize: 0,
            photoExtension: ''
        };

        this.updateField = this.updateField.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    updateField(field, value) {

        this.setState({[field]: value});
    }

    onSelectFile(e) {
        
        if (e.target.files && e.target.files.length > 0) {
            
            const reader = new FileReader();
            const size = bytesToMB(e.target.files[0].size);
            const extension = getFileExtension(e.target.files[0].name);
    
            reader.addEventListener('load', () => {
          
                this.setState({ 
                    photo: reader.result,
                    photoSize: size,
                    photoExtension: extension
                });
            });
          
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    clearForm() {

        this.setState({
            name: '',
            message: '',
            photo: '',
            photoSize: 0,
            photoExtension: ''
        });
    }

    addPost() {

        const { postStore, addPost } = this.props;
        const id = postStore.count + 1;
        const { name, message, photo, photoSize, photoExtension } = this.state;

        if(photo === '') {

            toastr.info('Buildbox', 'Selecione a foto')
        }
        else if(photoSize > 5) {

            toastr.info('Buildbox', 'A imagem da palavra deve ser inferior a 5 MB');
        }
        else if(!(photoExtension === 'png')) {
      
            toastr.info('Buildbox', 'A imagem da palavra deve estar no formato PNG');
        }
        else if(name === '') {

            toastr.info('Buildbox', 'Informe o seu nome');
        }
        else if(message === '') {

            toastr.info('Buildbox', 'Informe a mensagem');
        }
        else {

            const post = { id, name, message, photo };

            addPost(post);
            toastr.success('Buildbox', 'O seu post foi publicado com sucesso');
            this.clearForm();
        }
    }

    render() {

        const { name, message, photo } = this.state;

        return (
            <div className="PostForm">
                <div>
                    <UploadButton
                        onClick={this.onSelectFile}
                        selectedPhoto={photo}/>
                </div>
                <div className="inputForm">
                    <input
                        className="txtName" 
                        type={"text"} 
                        name="name"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => this.updateField('name', e.target.value)}/>
                    <textarea
                        className="txtMessage" 
                        name="message"
                        placeholder="Mensagem"
                        value={message}
                        onChange={(e) => this.updateField('message', e.target.value)}>
                        {message}
                    </textarea>
                </div>
                <div className="buttonsForm">
                    <a 
                        href="#"
                        className="lblClear"
                        onClick={() => this.clearForm()}>
                        Descartar
                    </a>
                    <RoundedButton
                        onClick={() => this.addPost()}
                        label="Publicar"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    postStore: state.postStore
});

const mapDispatchToProps = {
    addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);