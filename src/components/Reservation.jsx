import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("0")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const navigate = useNavigate()

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://restaurent-backend-nu.vercel.app/api/v1/reservations/send", {
                firstName,
                lastName,
                email,
                phone,
                date,
                time
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                // withCredentials: false
            });
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setDate("");
            setTime("");
            navigate("/success")
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Something went wrong");
        }
    }

  return (
    <section className='reservation' id="reservation">
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="res" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1 className='heading'>Make a Reservation</h1>
                    <p>For Further Questions , <a href="mailto:mekchandvikas@gmail.com">Contact Us</a></p>
                    <form>
                        <div>
                            <input type="text"  placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text"  placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />

                        </div>
                        <div>
                            <input type="date"  placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                            <input type="time"  placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <div>
                            <input type="email"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="tel"  placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            
                        </div>
                        <button type="submit" onClick={handleReservation}>Reserve Now <span><HiOutlineArrowNarrowRight /></span></button>
                    </form>
                </div>
            </div>
        </div>


    </section>


  )
    
}

export default Reservation
