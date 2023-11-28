import { useOrder } from "../../context/OrderContex";

export function Form() {
    const {handleSubmit,formData,setFormData,errors} = useOrder()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    return (
      <form onSubmit={handleSubmit} className=" mx-2">
        <label>Nombre</label>
        <input
          className="mb-1 col-12"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <div className="text-danger mb-3">{errors.nombre}</div>}

        <label>Email</label>
        <input
            className="mb-1 col-12"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        {errors.email && <div className="text-danger mb-3">{errors.email}</div>}

        <label>Telefono</label>
        <input
            className="mb-1 col-12"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder={errors.telefono && `${errors.telefono}`}
        />
      </form>
    )
}