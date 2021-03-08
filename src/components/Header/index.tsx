/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { cnpjValidator } from 'some-validations';

import api from '../../services/api';
import {
  ContainerModal,
  Modal,
  Navigation,
  Container,
  Wrapper,
} from './styles';

interface HeaderProps {
  showArrowBack?: boolean;
}

interface CarShopInputs {
  name: string;
  cnpj: string;
  image: FileList;
}

interface CarInputs {
  brand: string;
  model: string;
  year: string;
  color: string;
  price: string;
  carShopCnpj: string;
  image: FileList;
}

const Header = ({ showArrowBack }: HeaderProps) => {
  const [preview, setPreview] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tab, setTab] = useState('CarShop');

  const {
    register: registerCarShop,
    handleSubmit: handleSubmitCarShop,
    errors: ErrorsCarShop,
  } = useForm<CarShopInputs>();
  const {
    register: registerCar,
    handleSubmit: handleSubmitCar,
    errors: ErrorsCar,
  } = useForm<CarInputs>();

  const onSubmitCarShop = async (data: CarShopInputs) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('cnpj', data.cnpj.replace(/[^0-9]/g, ''));
    formData.append('image', data.image[0]);

    try {
      await api.post('/carShop', formData);
      setModalIsOpen(false);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitCar = async (data: CarInputs) => {
    const formData = new FormData();
    formData.append('brand', data.brand);
    formData.append('model', data.model);
    formData.append('year', data.year);
    formData.append('color', data.color);
    formData.append('price', data.price);
    formData.append('carShopCnpj', data.carShopCnpj);
    formData.append('image', data.image[0]);

    try {
      await api.post('/car', formData);
      setModalIsOpen(false);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modalIsOpen && (
        <>
          <ContainerModal onClick={() => setModalIsOpen(false)} />
          <Modal>
            <Navigation>
              <div onClick={() => setTab('CarShop')}>
                <span style={{ color: tab === 'CarShop' && '#dc1839' }}>
                  CarShop
                </span>
              </div>
              <div onClick={() => setTab('Car')}>
                <span style={{ color: tab === 'Car' && '#dc1839' }}>Car</span>
              </div>
            </Navigation>
            {tab === 'CarShop' && (
              <form onSubmit={handleSubmitCarShop(onSubmitCarShop)}>
                <input
                  name="name"
                  ref={registerCarShop({
                    required: true,
                  })}
                  type="text"
                  placeholder="Name"
                />
                {ErrorsCarShop.name &&
                  ErrorsCarShop.name.type === 'required' && (
                    <span>Name is required</span>
                )}
                <input
                  name="cnpj"
                  ref={registerCarShop({
                    validate: value => cnpjValidator.isValid(value),
                    required: true,
                  })}
                  type="text"
                  placeholder="CNPJ"
                />
                {ErrorsCarShop.cnpj && <span>CNPJ is not valid</span>}
                <input
                  name="image"
                  ref={registerCarShop}
                  type="file"
                  onChange={e =>
                    e.target.files.length > 0 &&
                    setPreview(URL.createObjectURL(e.target.files[0]))
                  }
                />
                {preview && <img src={preview} alt="car shop" />}
                <button type="submit">Add</button>
              </form>
            )}
            {tab === 'Car' && (
              <form onSubmit={handleSubmitCar(onSubmitCar)}>
                <input
                  name="brand"
                  ref={registerCar({
                    required: true,
                  })}
                  type="text"
                  placeholder="Brand"
                />
                {ErrorsCar.brand && ErrorsCar.brand.type === 'required' && (
                  <span>Brand is required</span>
                )}
                <input
                  name="model"
                  ref={registerCar({
                    required: true,
                  })}
                  type="text"
                  placeholder="Model"
                />
                {ErrorsCar.model && ErrorsCar.model.type === 'required' && (
                  <span>Model is required</span>
                )}
                <input
                  name="year"
                  ref={registerCar({
                    required: true,
                  })}
                  type="text"
                  placeholder="Year"
                />
                {ErrorsCar.year && ErrorsCar.year.type === 'required' && (
                  <span>Year is required</span>
                )}
                <input
                  name="color"
                  ref={registerCar({
                    required: true,
                  })}
                  type="text"
                  placeholder="Color"
                />
                {ErrorsCar.color && ErrorsCar.color.type === 'required' && (
                  <span>Color is required</span>
                )}
                <input
                  name="price"
                  ref={registerCar({
                    required: true,
                  })}
                  type="text"
                  placeholder="Price"
                />
                {ErrorsCar.price && ErrorsCar.price.type === 'required' && (
                  <span>Price is required</span>
                )}
                <input
                  name="carShopCnpj"
                  ref={registerCar({
                    validate: value => cnpjValidator.isValid(value),
                    required: true,
                  })}
                  type="text"
                  placeholder="Car shop CNPJ"
                />
                {ErrorsCar.carShopCnpj && (
                  <span>Car shop CNPJ is not valid</span>
                )}
                <input
                  name="image"
                  ref={registerCar}
                  type="file"
                  onChange={e =>
                    e.target.files.length > 0 &&
                    setPreview(URL.createObjectURL(e.target.files[0]))
                  }
                />
                {preview && <img src={preview} alt="car shop" />}
                <button type="submit">Add</button>
              </form>
            )}
          </Modal>
        </>
      )}
      <Container>
        {showArrowBack && (
          <Link href="/">
            <a>
              <FiArrowLeft size={50} color="#dc1839" />
            </a>
          </Link>
        )}
        <Wrapper>
          <div>
            <h1>Shopcar,</h1>
            <p>buy your new car now!</p>
          </div>
          <div onClick={() => setModalIsOpen(!modalIsOpen)} aria-hidden="true">
            <FiPlus size={150} color="#29292e" />
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
