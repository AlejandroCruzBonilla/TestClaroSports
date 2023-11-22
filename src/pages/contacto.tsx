import { Layout } from '@/Layout/Layout';

export default function avisoPrivacidad() {
  return (
    <Layout
      seo={{
        title: 'Contacto',
        description: 'Contacto Claro Sports SOCHI 2014',
      }}
    >
      <div className='contact'>
        <h1>Contacto</h1>

				<p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempor lacinia mauris, per volutpat phasellus neque ante class eleifend feugiat. At sodales feugiat fermentum cras dictumst inceptos nam gravida, senectus enim ut morbi augue tortor penatibus, id iaculis phasellus libero magnis tristique pellentesque. Sollicitudin sagittis fames pharetra mi cubilia mollis torquent arcu id massa sem quisque, per proin cursus ante imperdiet egestas suspendisse sed velit porttitor taciti. Aliquet malesuada ultrices aliquam curae ante ullamcorper condimentum pellentesque, parturient lobortis mattis mauris suspendisse cum dui blandit sagittis, commodo orci class velit tincidunt ornare ligula.</p>

        <div className='form__wrapper'>
          <form className='form' id='userForm'>
            <fieldset className='form__fieldset'>
              <legend className='form__legend'>Envía tu mensaje</legend>

              <div className='form__input-wrapper'>
                <label className='form__label' htmlFor='name'>
                  Nombre
                </label>
                <input
                  className='form__input'
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Nombre'
                  required
                />
              </div>

              <div className='form__input-wrapper'>
                <label className='form__label' htmlFor='email'>
                  Edad
                </label>
                <input
                  className='form__input'
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form__input-wrapper'>
                <label className='form__label' htmlFor='message'>
                  Mensaje
                </label>
                <textarea
                  className='form__input'
                  id='message'
                  placeholder='Mensaje'
                  name='message'
                  required
                />
              </div>

              <input className='form__submit' type='submit' />
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
}
