'use client'
import InputComponent from "@/components/FormElements/InputComponent"
import SelectComponent from "@/components/FormElements/InputComponent/SelectComponent"
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { registrationFormControls } from "@/components/utils"
import { registerNewUser } from "@/services/register";
import React, { useEffect,useState } from 'react';
import { toast } from "react-toastify";

const isRegistered = false

const initialFormData = {
    name: '',
    email: '',
    password: '',
    role: 'costumer',
};

export default function Register() {

    const [formData, setFormData] = useState(initialFormData);
    const [isRegistered , setIsRegistered] = useState(false);
    const { pageLevelLoader, setPageLevelLoader, isAuthUser} = useState(false);
    console.log(formData); //marrim ose heqim cdo shkronje console log

    function isFormValid() { //validimi i formes ifnotempty

        return formData && formData.name && formData.name.trim() !== ''
            && formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }

    async function handleRegisterOnSubmit() {
        setPageLevelLoader(true);
        const data = await registerNewUser(formData);
    
        if (data.success) {
          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setIsRegistered(true);
          setPageLevelLoader(false);
          setFormData(initialFormData);
        } else {
          toast.error(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setPageLevelLoader(false);
          setFormData(initialFormData);
        }
    
        console.log(data);
      }
    
      useEffect(() => {
        if (isAuthUser) router.push("/");
      }, [isAuthUser]);

    return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-4xl font-medium text-center font-serif">
                                {
                                    isRegistered ? "Registration Successful" : "Sign up "
                                }
                            </p>
                            {
                                //mapping

                                isRegistered ? (
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                                text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase trackig-wide">
                                        Login
                                    </button>
                                ) :
                                    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                        {
                                            registrationFormControls.map(controllItem =>
                                                controllItem.componentType === 'input' ?
                                                    <InputComponent
                                                        type={controllItem.type}
                                                        placeholder={controllItem.placeholder}
                                                        label={controllItem.label}
                                                        onChange={(event) => {
                                                            setFormData({
                                                                ...formData,
                                                                [controllItem.id]: event.target.value,
                                                            });
                                                        }}
                                                        value={formData[controllItem.id]}
                                                    />
                                                    :
                                                    controllItem.componentType === 'select' ? <SelectComponent
                                                        options={controllItem.options}
                                                        label={controllItem.label}
                                                        onChange={(event) => {
                                                            setFormData({
                                                                ...formData,
                                                                [controllItem.id]: event.target.value,
                                                            });
                                                        }}
                                                        value={formData[controllItem.id]}
                                                    /> : null
                                            )
                                        }
                                        <button className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                                text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase trackig-wide"
                                 disabled={!isFormValid()}
                                 onClick={handleRegisterOnSubmit}
                                 >
                                    {pageLevelLoader ? (
                                        <ComponentLevelLoader
                                        text={"Registering"}
                                        color={"#fffffff"}
                                        loading={pageLevelLoader}
                                        />
                                    ) : (
                                    "Register"
                                    )}

                                            Register
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Notification/>
        </div>
    )
}