import { useParams, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { DateContext } from '../../contexts/dateContext'
import { useForm } from 'react-hook-form'
import Layout from '../../components/layout'
import { getDays } from '../../utils/getDate'
import { checkDNI } from '../../utils/checkID'
import Text from '../../components/Text/Text'

export default function RoomBooking() {
  const { dateIn, dateOut } = useContext(DateContext)
  const { id } = useParams()
  const { state } = useLocation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const precioFinal = getDays(dateIn, dateOut) * state.precio
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nombre" {...register('name', { required: true })} />

        <input
          placeholder="Apellidos"
          {...register('surname', { required: true })}
        />

        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />

        {errors.phone && (
          <Text as="span" color="red" fontSize="12px" align="left">
            El telefono debe tener 9 digitos
          </Text>
        )}
        <input
          type="tel"
          placeholder="Telefono"
          {...register('phone', { required: true, pattern: /^\d{9}$/ })}
        />

        {errors.dni && (
          <Text as="span" color="red" fontSize="12px" align="left">
            Numero de identificación incorrecto
          </Text>
        )}
        <input
          placeholder="DNI/NIE/PASAPORTE"
          {...register('dni', {
            required: true,
            pattern:
              /^[0-9]{8}[A-Z]$/i | /^[A-Za-z][A-Za-z0-9]{7,8}[^A-Za-z0-9]$/i,
          })}
        />

        <input defaultValue={dateIn} {...register('dateIn')} disabled />

        <input defaultValue={dateOut} {...register('dateOut')} disabled />

        <input
          type="number"
          max={state.personas_max}
          min={state.personas_min}
          placeholder="Cantidad de personas"
          {...register('people', {
            validate: (value) =>
              value >= state.personas_min && value <= state.personas_max,
          })}
        />
        <textarea placeholder="Comentarios" {...register('comments')} />
        <div className="container">
          <Text as="h3">PRECIO FINAL: </Text>
          <Text as="span">{precioFinal}€</Text>
        </div>
        <input type="submit" />
      </form>
    </Layout>
  )
}
