import { faBan, faCheck, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";
import { Button, initTE } from "tw-elements";

initTE({ Button });

function OrdersInProgress() {
  const data = [
    {
      _id: "647cfd59ee9b82d397c493b2",
      id: 0,
      name: "Rhoda Collins",
      address: "890 Stryker Street, Disautel, Missouri, 1490",
      date: "2023-05-31",
      phone: "+1 (910) 418-2936",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd5940689e6230196c07",
      id: 1,
      name: "Ross Fisher",
      address: "949 Ferry Place, Ripley, New York, 8565",
      date: "2023-05-31",
      phone: "+1 (961) 562-3653",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd59b869627d5d7b36f0",
      id: 2,
      name: "Edna Wilder",
      address: "431 Bowne Street, Escondida, Alabama, 1333",
      date: "2023-05-31",
      phone: "+1 (946) 423-2587",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd59611fc4a092307d75",
      id: 3,
      name: "Wilson Ellis",
      address: "356 Havens Place, Caberfae, Kentucky, 3978",
      date: "2023-05-31",
      phone: "+1 (879) 546-2898",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd59d38fda4cbbee89a6",
      id: 4,
      name: "Dianna Burke",
      address: "916 Borinquen Pl, Sandston, North Carolina, 6451",
      date: "2023-05-31",
      phone: "+1 (892) 500-3891",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd590629e96f0c727faa",
      id: 5,
      name: "Susie Baldwin",
      address: "731 Gaylord Drive, Sehili, Tennessee, 3786",
      date: "2023-05-31",
      phone: "+1 (856) 482-3890",
      order: [],
      status: "Pendiente",
    },
    {
      _id: "647cfd592394f24467a2ed3e",
      id: 6,
      name: "Patti Hester",
      address: "213 Bank Street, Crucible, New Mexico, 9010",
      date: "2023-05-31",
      phone: "+1 (955) 422-3687",
      order: [],
      status: "Pendiente",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light justify-center">
              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    Id
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Cliente
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Dirección
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Fecha y hora pedido
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Teléfono
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Pedido
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Estado
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((order) => (
                  <tr
                    className="border-b dark:border-neutral-500"
                    key={order.id}
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      {order.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      {order.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      {order.address}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      {order.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      {order.phone}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                    <button
                          type="button"
                          className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white"
                        >
                          <Icon css="icon" icon={faEye} />
                        </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      {order.status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      <div className="flex justify-between">
                        <button
                          type="button"
                          data-te-toggle="button"
                          className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white"
                        >
                          <Icon css="icon" icon={faBan} />
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded bg-yellow-500 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white"
                        >
                          <Icon css="icon" icon={faPen} />
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white"
                        >
                          <Icon css="icon" icon={faCheck} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersInProgress;
