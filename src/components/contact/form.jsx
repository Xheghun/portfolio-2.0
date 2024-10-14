"use client";
import emailJs from "@emailjs/browser";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2.2
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("sending message.....");
    const name = params.from_name.split(" ")[0];

    emailJs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, //(5000 / 5) * 30 * 60, //limit to one email every 30 minutes
          },
        }
      )
      .then(
        () => {
          toast.success(`Thanks! Got your message ${name}, I'll be in touch`, {
            id: toastId,
          });
        },
        (error) => {
          toast.error(
            `Ops! your message didn't go through ${name}. it not you, it's me`,
            { id: toastId }
          );
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
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name field is required",
            minLength: { value: 3, message: "Enter a minimum of 3 characters" },
          })}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email field is required",
            minLength: {
              value: 3,
              message: "Enter a valid email of 3 characters",
            },
          })}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="tel"
          placeholder="Mobile number"
          {...register("mobile_number", {})}
        />
        <motion.input
          variants={item}
          placeholder="Message"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("message", {
            required: "Please add your message to this field",
            maxLength: {
              value: 300,
              message: "Message should be within 10 - 300 characters",
            },
            minLength: {
              value: 9,
              message: "Message should be within 10 - 300 characters",
            },
          })}
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
    </>
  );
}
