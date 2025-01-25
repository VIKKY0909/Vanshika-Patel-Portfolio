import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold text-center text-foreground mb-6"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-center text-secondary-foreground mb-12"
        >
          Let’s create something amazing together. Drop me a message below!
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Hidden Web3Forms token */}
          <input
            type="hidden"
            name="access_key"
            value="306a6a8e-4b21-4800-a371-7388a10caf91"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full"
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="rounded-md border border-input bg-background p-4"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full"
            >
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="rounded-md border border-input bg-background p-4"
              />
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full"
          >
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="rounded-md border border-input bg-background p-4"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              className="rounded-full bg-foreground to-pink-600 text-white px-6 py-3 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Send Message
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactMeSection;
