import Header from "./header";
import Section from './section';
import Input from './input';
import Selected from "./selected";

export default function CreateUser() {
    return (
        <>
            <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                

                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <Header valueH6='Crear usuario' valueButton='Crear' />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-5">
                    <form autoComplete='off'>
                        <Section valueH6='Información del usuario obligatoria' separate={true}>
                            <Input
                                name='first_name'
                                type='text'
                                placeholder='Nombres'
                                dimension='6'
                            />
                            <Input
                                name='last_name'
                                type='text'
                                placeholder='Apellidos'
                                dimension='6'
                            />
                            <Input
                                name='email'
                                type='email'
                                placeholder='Correo electrónico'
                                dimension='4'
                            />
                            <Input
                                name='password'
                                type='text'
                                placeholder='Contraseña'
                                dimension='4'
                            />

                            <Selected />
                        </Section>

                        <Section valueH6='Información de contacto' separate={true}>
                            <Input
                                name='address'
                                type='text'
                                placeholder='Dirección'
                                dimension='12'
                            />
                            <Input
                                name='country'
                                type='text'
                                placeholder='País'
                                dimension='4'
                                defaultValue='Ecuador'
                            />
                            <Input
                                name='city'
                                type='text'
                                placeholder='Ciudad'
                                dimension='4'
                            />
                            <Input
                                name='postal_code'
                                type='text'
                                placeholder='Código Postal'
                                dimension='4'
                            />
                        </Section>

                        <Section valueH6='Acerca de'>
                            <Input valueH6='Acerca de la persona' placeholder='Descripción' name='description' textArea={true} />
                        </Section>

                    </form>
                </div>
            </div>
        </>
    );
}
