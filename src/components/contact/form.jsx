"use client";
import emailJs from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    emailJs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000 //(5000 / 5) * 30 * 60, //limit to one email every 30 minutes
          },
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "David",
      from_name: data.name,
      reply_to: data.email,
      from_phone: data.mobile_number,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <form
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="tel"
        placeholder="Mobile number"
        {...register("mobile_number", {})}
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        {...register("message", { required: true, max: 300, min: 9 })}
      />

      <input
        value="Cast your message"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg cursor-pointer capitalize"
        type="submit"
      />
    </form>
  );
}
