import ContactForm from "./ContactForm";

export default function ContactusDetails() {
    return (
        <>
            <div className="bg-white py-16">
                <div className="text-center py-12 px-4">
                    <p className="text-[16px] font-semibold leading-[24px] mb-[16px]">Get In Touch</p>
                    <h2 className="mt-4 text-black text-[48px] font-normal leading-[24px]">Contact Us</h2>
                    <p className="mt-[24px] text-black text-[18px] font-normal leading-[24px]">We&apos;d love to hear from you</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[80px]">
                        <div className="p-4">
                            <h3 className="text-[32px] font-normal leading-[20px]">Email</h3>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal">Reach out to us via email for inquiries or support.</p>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                                <a href="mailto:hello@relume.io" className="text-blue-600">
                                    hello@relume.io
                                </a>
                            </p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-[32px] font-normal leading-[20px]">Phone</h3>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal">Call us for immediate assistance or questions.</p>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">
                                <a href="tel:+15551234567" className="text-blue-600">
                                    +1 (555) 123-4567
                                </a>
                            </p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-[32px] font-normal leading-[20px]">Office</h3>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal">Visit us at our headquarters for personalized service.</p>
                            <p className="mt-[16px] text-[16px] leading-[20px] font-normal underline">123 Sample St, Sydney NSW 2000 AU</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </>
    );
}
