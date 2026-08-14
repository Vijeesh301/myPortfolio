import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";

const ContactForm = () => {
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .trim()
        .matches(/^[A-Za-z\s]*$/, "Must contain alphabets only")
        .required("Name is required"),
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
    onSubmit: (values) => {
      submitMessage(values);
    },
  });

  const submitMessage = async (values) => {
    setLoader(true);
    try {
      const docRef = doc(db, "stats", "website");
      const docSnap = await getDoc(docRef);
      const existingMessage = docSnap.data()?.messageData ?? [];
      await setDoc(
        doc(db, "stats", "website"),
        {
          messageData: [...existingMessage, values],
        },
        { merge: true },
      );
      formik.resetForm();
      setLoader(false);
      toast.success(
        <span className="text-[13px] text-green-700">
          Message sent successfully! Thank you for reaching out. I'll get back
          to you as soon as possible.
        </span>,
      );
    } catch (err) {
      toast.error(err);
      setLoader(false);
      return err;
    }
  };

  useEffect(() => {
    if (formik.touched.name && formik.errors.name) {
      toast.error(
        <span className="text-[13px] text-red-700">{formik.errors.name}</span>,
      );
    }
    if (formik.touched.email && formik.errors.email) {
      toast.error(
        <span className="text-[13px] text-red-700">{formik.errors.email}</span>,
      );
    }
    if (formik.touched.message && formik.errors.message) {
      toast.error(
        <span className="text-[13px] text-red-700">
          {formik.errors.message}
        </span>,
      );
    }
  }, [
    formik.touched.name,
    formik.errors.name,
    formik.touched.email,
    formik.errors.email,
    formik.touched.message,
    formik.errors.message,
  ]);
  return (
    <>
      <Card className="bg-[#af0571]/10 w-full p-10 min-h-65 mb-5">
        <CardHeader className="text-white text-[1.5rem]">
          <span>Contact Form</span>
          <div className="h-px flex-1 bg-white/20"></div>
          <p className="text-[.8rem]">Have a project or opportunity in mind?</p>
        </CardHeader>
        <CardContent className="text-white text-[1rem]">
          <div
            className="flex justify-center px-4"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                formik.handleSubmit();
              }
            }}
          >
            <div className="w-90 max-w-xl">
              <div className="flex flex-col gap-4 rounded-lg">
                <Input
                  placeholder="Name"
                  className="w-full"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name}
                />

                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Textarea
                  placeholder="Message"
                  className="min-h-32 w-full resize-none"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  error={formik.touched.message && formik.errors.message}
                />

                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={formik.handleSubmit}
                  type="submit"
                >
                  {loader ? "Sending" : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
