//admin
const opcionesAdmin = [
    
    { nombre: "Perfiles", icono: "bi bi-clipboard-data", ruta: "", hijos: [
        { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listprofiles", },
        { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addprofile" },
        { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admprofile", },
      ]
    },
    { nombre: "Usuarios", icono: "bi bi-person-lines-fill", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listusers", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/adduser" },
      { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admuser", },
      ]
    },
    { nombre: "Productos", icono: "bi bi-calendar", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listp", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addp" },
      { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admp", },

      { nombre: "Pozos", icono: "bi bi-circle", ruta: "/dashboard/pozos", },
      ]
    },
  ];
  
  const opcionesInvitado = [
    { nombre: "Productos", icono: "bi bi-calendar", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listp", },
      ]
    },
  ];

  const opcionesColaborador = [
    { nombre: "Productos", icono: "bi bi-calendar", ruta: "", hijos: [
      { nombre: "Listado", icono: "bi bi-circle", ruta: "/dashboard/listp", },
      { nombre: "Nuevo", icono: "bi bi-circle", ruta: "/dashboard/addp" },
      { nombre: "Administración", icono: "bi bi-circle", ruta: "/dashboard/admp", },
      ]
    },
  ];
  
  export { opcionesAdmin, opcionesInvitado, opcionesColaborador };