import { Formik } from 'formik'
import * as Yup from 'yup'

function App() {
  const LoginHandler = (values) => {
    console.log(values)
  }
  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required('Password is required')
      .max(15, 'password cannot be more than 15 characters')
      .matches(
        /^.*(?=.{8})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        `minimum of 8 characters\n\n
         maximum of 15\n\n
         one uppercase\n\n
         one lowercase\n\n
         one special character`
      ),
    gender: Yup.mixed()
      .required('gender is required')
      .oneOf(['male', 'female'], 'gender can only be male or female'),
  })
  return (
    <div className='h-screen w-screen flex'>
      <div className='w-1/2 bg-blue-800'></div>
      <div className='w-1/2 bg-gray-100 flex flex-wrap justify-center content-center'>
        <Formik
          onSubmit={LoginHandler}
          validationSchema={LoginValidationSchema}
          initialValues={{ email: '', password: '', sex: '' }}
        >
          {({
            values,
            handleSubmit,
            touched,
            errors,
            handleChange,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit} className='w-1/2'>
              <div className='mb-3'>
                <input
                  className={
                    errors.email
                      ? 'w-full outline-none border-red-300 focus:border-purple-500 rounded p-2 border'
                      : 'w-full outline-none focus:border-purple-500 rounded p-2 border'
                  }
                  type='email'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='johndoe@gm.com'
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <small className='text-red-500'>{errors.email} </small>
                )}
              </div>
              <div className='mb-3'>
                <input
                  className={
                    errors.password
                      ? 'w-full outline-none border-red-300 focus:border-purple-500 rounded p-2 border'
                      : 'w-full outline-none focus:border-purple-500 rounded p-2 border'
                  }
                  type='password'
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Password here'
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <small className='text-red-500'>{errors.password} </small>
                )}
              </div>
              <div className='mb-3'>
                <input
                  className={
                    errors.sex
                      ? 'w-full outline-none border-red-300 focus:border-purple-500 rounded p-2 border'
                      : 'w-full outline-none focus:border-purple-500 rounded p-2 border'
                  }
                  type='text'
                  name='gender'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='What  is your gender'
                  value={values.gender}
                />
                {touched.gender && errors.gender && (
                  <small className='text-red-500'>{errors.gender} </small>
                )}
              </div>
              <button className='bg-blue-800 w-full text-white font-bold text-base p-2 rounded'>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default App
