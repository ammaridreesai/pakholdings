import ContactForm from "./ContactForm";

export default function ContactusDetails() {
  return (
    <>
      <div className="bg-white py-16">
        <div className="text-center py-12 px-4">
          <p className="text-[16px] font-semibold leading-[24px] mb-[16px]">
            Get In Touch
          </p>
          <h2 className="mt-4 text-black text-[48px] font-normal leading-[24px]">
            Contact Us
          </h2>
          <p className="mt-[24px] text-black text-[18px] font-normal leading-[24px]">
            We&apos;d love to hear from you
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[80px]">
            <div className="p-4">
              <h3 className="text-[32px] font-normal leading-[20px]">Email</h3>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal">
                Reach out to us via email for inquiries or support.
              </p>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                <a href="mailto:hello@relume.io" className="">
                  stallions323@gmail.com
                </a>
              </p>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                <a href="mailto:hello@relume.io" className="">
                  stallions323@yahoo.co.uk
                </a>
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-[32px] font-normal leading-[20px]">Phone</h3>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal">
                Call us for immediate assistance or questions.
              </p>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                <a href="tel:03194530934" className="">
                  <strong>Pakistan: </strong>0319 4530934
                </a>
              </p>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                <a href="tel:+447842507879" className="">
                  <strong>England: </strong>+44 7842 507879
                </a>
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-[32px] font-normal leading-[20px]">Office</h3>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal">
                Visit us at our headquarters for personalized service.
              </p>
              <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                Stallion House, H# 94, Street 11, Sector A, Phase 8, Bahria Town
                ,Rawalpindi
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
