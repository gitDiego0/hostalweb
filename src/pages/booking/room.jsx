import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DateContext } from '../../contexts/dateContext'
import { useForm } from 'react-hook-form'
import Layout from '../../components/layout'

export default function RoomBooking() {
  const { dateIn, dateOut } = useContext(DateContext)
  const { id } = useParams()
  console.log(id)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nombre" {...register('name')} />
        <input placeholder="Apellidos" {...register('surname')} />
        <input placeholder="Email" {...register('email')} />
        <input placeholder="Telefono" {...register('phone')} />
        <input placeholder="DNI" {...register('dni')} />
        <input defaultValue={dateIn} {...register('dateIn')} />
        <input defaultValue={dateOut} {...register('dateOut')} />
        <input placeholder="Cantidad de personas" {...register('people')} />
        <input placeholder="Comentarios" {...register('comments')} />
        <input type="submit" />
      </form>
    </Layout>
  )
}
