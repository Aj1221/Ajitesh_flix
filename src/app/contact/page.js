import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.655790336158!2d77.42076667527033!3d28.61010128509937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb2ac047e29%3A0xe6931480c4a3c5d!2sGreater%20Noida%20W%20Rd%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1692361856463!5m2!1sen!2sin" 
            width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
            referrerPolicy="no-referrer-when-downgrade"></iframe>

          
        </>
    );
};

export default Contact;