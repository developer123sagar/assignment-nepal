import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currency, paymentMethod, formSchema } from "@/constants";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { getCurrentDateTime } from "@/helpers/getCurrentDateTime";
import { generateUniqueFourDigitNumber } from "@/helpers/generateUniqueFourDigitNum";

const Payment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      access_key: "",
      profile_id: "",
      transaction_uuid: "",
      signed_field_names: "",
      unsigned_field_names: "",
      signed_date_time: getCurrentDateTime(),
      locale: "en",
      auth_trans_ref_no: "",
      bill_to_forename: "",
      bill_to_surname: "",
      bill_to_email: "",
      bill_to_phone: "",
      bill_to_address_line1: "",
      bill_to_address_city: "",
      bill_to_address_state: "",
      bill_to_address_country: "NP",
      bill_to_address_postal_code: "",
      amount: "",
      transaction_type: "sale",
      reference_number: generateUniqueFourDigitNumber(),
      currency: "",
      payment_method: "",
      signature: "",
      card_type: "",
      card_number: "",
      card_expiry_date: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const updatedValues: any = { ...values };
      updatedValues.access_key = import.meta.env.VITE_CYBERSOURCE_ACCESS_KEY;
      updatedValues.profile_id = import.meta.env.VITE_CYBERSOURCE_PROFILE_ID;
      updatedValues.transaction_uuid = uuidv4();
      updatedValues.signed_field_names =
        "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code";
      updatedValues.unsigned_field_names =
        "card_type,card_number,card_expiry_date";
      const res = await fetch(
        "https://api.assignmentnepal.com/api/cbs/cybersource",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedValues),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        toast.success("Successfully submitted your information!");
        updatedValues.signature = data.signature;
        const form = document.createElement("form");
        form.action = "https://testsecureacceptance.cybersource.com/pay";
        form.method = "POST";
        form.style.display = "none";

        for (const key in updatedValues) {
          if (updatedValues.hasOwnProperty(key)) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = updatedValues[key];
            form.appendChild(input);
            console.log(input);
          }
        }

        document.body.appendChild(form);
        form.submit();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="border-[2px] border-gray-200 rounded-md mt-10 w-[70%] mx-auto p-5">
      <h1 className="text-20 font-bold mb-10">Customer Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 w-full">
            {/* forename */}
            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_forename"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      ForeName
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Sagar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* surname */}
            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_surname"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Surname
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Chand" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="chandsagar314@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="9800501332" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_address_line1"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      AddrLine
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="N/A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_address_city"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      AddrCity
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="N/A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="bill_to_address_state"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      AddrState
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Bagmati" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Currency
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[460px]">
                          <SelectValue
                            placeholder="Currency"
                            className="text-gray-400 placeholder:text-gray-400"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white-1 w-[460px]">
                          {currency.map((cur, id) => (
                            <SelectItem
                              className="cursor-pointer"
                              key={`${cur}-${id}`}
                              value={cur}
                            >
                              {cur}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="payment_method"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Payment Method
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[460px]">
                          <SelectValue
                            placeholder="Payment Method"
                            className="text-gray-400 placeholder:text-gray-400"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white-1 w-[460px]">
                          {paymentMethod.map((payMet) => (
                            <SelectItem
                              className="cursor-pointer"
                              key={payMet}
                              value={payMet}
                            >
                              {payMet}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-[460px]">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Amount
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-10 w-[150px]">
            <Button
              type="submit"
              className="inline-flex mt-7 w-full h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#15171C,45%,#F6F5F2,48%,#15171C)] bg-[length:200%_100%] px-6 font-medium text-white-1 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-sm"
            >
              {isSubmitting ? (
                <>
                  Submitting
                  <Loader size={20} className="animate-spin ml-2" />
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Payment;
