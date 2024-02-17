import { useRef } from "react";
import emailJs from "@emailjs/browser";
import { toast } from "react-toastify";
import SectionTitle from "./SectionTitle";

// senha = kxm?_&iSiQexYt3

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        "service_vdatipg",
        "template_r726k2n",
        form.current,
        "bdOLRJk3AQa-B7ypA"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("E-mail enviado com sucesso.");
          } else {
            toast.error("Falha ao enviar e-mail.");
          }
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
        <section className="bg-white py-16 md:py-20">
          <div id="contato" className="max-w-5xl mx-auto px-8">
            <SectionTitle text="contato" />
            <form ref={form} onSubmit={sendEmail} className="mt-10">
              <div className="sm:grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 mb-4  mb-8">
                  <label htmlFor="">Nome</label>
                  <input type="text" placeholder="Digite seu nome" name="user_name" className="p-4 bg-slate-200 rounded-lg border-none text-slate-800 placeholder-slate-500 font-normal focus:outline-none" />
                </div>

                <div className="flex flex-col gap-2 mb-4  mb-8">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    name="user_email"
                    className="p-4 bg-slate-200 rounded-lg border-none text-slate-800 placeholder-slate-500 font-normal focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="">Projeto</label>
                <textarea
                  placeholder="Informe detalhes sobre algum projeto ou proposta de emprego"
                  name="message"
                  className="p-4 bg-slate-200 rounded-lg border-none text-slate-800 resize-none h-32 placeholder-slate-500 font-normal focus:outline-none"
                ></textarea>
              </div>
              <button type="submit" className="text-white bg-green-500 hover:bg-green-600 px-6 py-4 rounded-lg text-xs font-bold uppercase transition duration-100 cursor-pointer border-none mt-6 ">
                Enviar e-mail
              </button>
            </form>
          </div>
        </section>
  );
};

export default Contact;
