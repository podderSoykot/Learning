import logging

class LoggerMixin:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
        handlers=[
            logging.StreamHandler(),
            logging.FileHandler("app.log",mode="a")
        ]
    )

    @property
    def logger(self):
        return logging.getLogger(self.__class__.__name__)
    def log_info(self,message):
        self.logger.info(message)
    def log_warning(self,message):
        self.logger.warning(message)
    def log_error(self,message):
        self.logger.error(message)
    def log_debug(self,message):
        self.logger.debug(message)


class PaymentProcessor(LoggerMixin):
    def process_payment(self,amount):
        self.log_info(f"Starting Payment processing for amount {amount}")
        if amount<=0:
            self.log_error("Invalid Paymrnt Amount!")
            return False
        self.log_info("Payment processd successfuly!")
        return True

if __name__=="__main__":
    processor=PaymentProcessor()
    processor.process_payment(100)
    processor.process_payment(-50)