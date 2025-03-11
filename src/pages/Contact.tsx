export const Contact: React.FC = () => (
    <main className="bg-background font-serif text-xl">
        <section className="container mx-auto py-20 grid grid-cols-2 gap-20">
            <div>
                <h1 className="text-6xl font-display mb-4">Contact Us</h1>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input required id="name" type="text" placeholder="John Doe" />
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input required id="email" type="email" placeholder="john.doe@domain.com" />
                    </div>

                    <div>
                        <label htmlFor="comments">Comments</label>
                        <textarea required id="comments" />
                    </div>

                    <button type="submit" className="btn-accent">
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <h2 className="text-6xl font-display mb-4">Visit Us</h2>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6047.144986955805!2d-73.9950740413086!3d40.727426699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c3c3e261ed%3A0x99382c99f1111170!2sDuo%20Cafe!5e0!3m2!1sen!2sus!4v1741657920107!5m2!1sen!2sus"
                    width="100%"
                    height={500}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    </main>
);
