import { useParams, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { DateContext } from '../../contexts/dateContext'
import { useForm } from 'react-hook-form'
import Layout from '../../components/layout'
import { getDays } from '../../utils/getDate'

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
        <input
          type="phone"
          placeholder="Telefono"
          {...register('phone', { required: true })}
        />
        <input
          placeholder="DNI/NIE/PASAPORTE"
          {...register('dni', { required: true })}
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
        <input type="submit" />
      </form>
      <span>{precioFinal}</span>
    </Layout>
  )
}
