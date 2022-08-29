const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      usuario: null,
      rol: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncTokenFromSessionStore: () => {
        const store = getStore();
        const token = sessionStorage.getItem("token");
        console.log(
          "Aplication just loaded, synching the session storage token"
        );
        //if(store.token && store.token!="" && store.token!=undefined) setStore({ token: token});
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Loging out");
        setStore({ token: null, usuario: null, rol: null });
      },

      loging: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/loging",
            opts
          );
          if (resp.status !== 200) {
            alert("There has been some error");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({
            token: data.access_token,
            usuario: data.user,
            rol: data.rol,
          });
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },

      signup: async (user) => {
        const usuario = {
          email: user.correo,
          typeuser: user.typeuser,
          letraidentificacion: user.letraidentificacion,
          indentificacion: user.identificacion,
          name: user.nombre,
          direccion: user.direccion,
          region: user.region,
          photo: user.photo,
          phone: user.phone,
          password: user.clave,
          personacontacto: user.personacontacto,
          descripcion: user.descripcion,
        };
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        };
        console.log("Usuario", usuario);
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", opts);
          if (resp.status !== 200) {
            alert("There has been some error");
            return false;
          }
          const data = await resp.json();
          //sessionStorage.setItem("token", data.access_token);
          //setStore({token: data.access_token, usuario: data.user, rol: data.rol})
          alert("Registrado con exito");
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
