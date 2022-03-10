import { HeaderComponent } from "../../components/Header";
import { FormComponent } from "../../components/Form";
import { TableComponent } from "../../components/Table";
import axios from "axios";
import DEFAULT_API_URLS from "../../utils/enum";
import { useState, useEffect } from "react";
import { ModalComponent } from "../../components/common";

const Home = () => {
  const [countries, setCountries] = useState([]);

  const [form, setForm] = useState({
    country: "Selecione...",
    local: "",
    meta: "",
  });

  const [list, setList] = useState([]);

  const [load, setLoad] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [itemModal, setItemModal] = useState({});

  const handleCountries = async () => {
    try {
      const { data } = await axios.get(DEFAULT_API_URLS.COUNTRIES);
      setCountries(data);
      console.log("data", data);
    } catch (error) {}
  };

  const handleSend = async () => {
    const arr: any = [];
    countries.filter((country: any) => {
      if (country.alpha2Code === form.country) {
        arr.push({
          country: country.alpha2Code,
          local: form.local,
          meta: form.meta,
          flag: country.flag,
          name: country.name,
        });
      }
    });
    try {
      await axios.post(`${DEFAULT_API_URLS.PLACES}places`, ...arr);
      setLoad(true);
      setForm({
        country: "Selecione...",
        local: "",
        meta: "",
      });
    } catch (error) {}
  };

  const handleChange = async () => {
    try {
      await axios.get(DEFAULT_API_URLS.PLACES).then((res) => {
        setList(res.data);
      });
    } catch (error) {}
  };

  const handleDelete = async (id: string) => {
    try {
      axios.delete(`${DEFAULT_API_URLS.PLACES}places/${id}`);
      setLoad(true);
    } catch (error) {}
  };

  const handleOpenModal = (item: any) => {
    setItemModal(item);
    setOpenModal(true);
  };

  const handleUpdateModal = async (item: any) => {
    try {
      await axios.put(`${DEFAULT_API_URLS.PLACES}places/${item._id}`, item);
      setOpenModal(false);
      setLoad(true);
    } catch (error) {}
  };

  useEffect(() => {
    handleCountries();
    handleChange();
  }, []);

  useEffect(() => {
    handleChange();
    setLoad(false);
  }, [load]);

  return (
    <>
      <HeaderComponent />
      <FormComponent
        countries={countries}
        state={{ value: form, action: setForm }}
        handleSend={handleSend}
      />
      <TableComponent
        list={list}
        handleDelete={handleDelete}
        handleOpenModal={handleOpenModal}
      />
      {openModal && (
        <ModalComponent
          setOpenModal={setOpenModal}
          handleUpdateModal={handleUpdateModal}
          itemModal={itemModal}
        />
      )}
    </>
  );
};

export default Home;
