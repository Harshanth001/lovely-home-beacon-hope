
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Gift, Heart, DollarSign, CreditCard, AlertCircle } from "lucide-react";

const currencies = [
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
];

const DonationSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [amount, setAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  
  const presetAmounts = {
    INR: ["500", "1000", "2500", "5000"],
    USD: ["10", "25", "50", "100"],
    EUR: ["10", "25", "50", "100"],
    GBP: ["10", "20", "50", "100"],
  };

  const handleCurrencyChange = (currencyCode: string) => {
    const currency = currencies.find((c) => c.code === currencyCode);
    if (currency) {
      setSelectedCurrency(currency);
      setAmount("");
    }
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-b from-white to-lovely-purple-light/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-4">
          <Gift className="h-8 w-8 text-lovely-purple mr-2" />
          <h2 className="section-title mb-0">Support Our Cause</h2>
        </div>
        <p className="section-subtitle">
          Your contribution helps provide care, education, and opportunities for those who need it most.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <Tabs defaultValue={selectedCurrency.code} onValueChange={handleCurrencyChange}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-xl font-bold mb-4 md:mb-0">Choose Currency</h3>
                <TabsList className="bg-lovely-gray-light">
                  {currencies.map((currency) => (
                    <TabsTrigger 
                      key={currency.code} 
                      value={currency.code}
                      className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
                    >
                      {currency.symbol} {currency.code}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {currencies.map((currency) => (
                <TabsContent key={currency.code} value={currency.code} className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-4">
                        <Label htmlFor="donation-amount" className="text-lg font-medium">
                          Donation Amount
                        </Label>
                        <RadioGroup 
                          value={donationFrequency} 
                          onValueChange={setDonationFrequency}
                          className="flex items-center space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-time" id="one-time" />
                            <Label htmlFor="one-time" className="cursor-pointer">One-time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly" className="cursor-pointer">Monthly</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {presetAmounts[currency.code as keyof typeof presetAmounts].map((preset) => (
                          <Button
                            key={preset}
                            type="button"
                            variant={amount === preset ? "default" : "outline"}
                            className={`${
                              amount === preset 
                                ? "bg-lovely-purple text-white" 
                                : "text-lovely-purple-dark hover:bg-lovely-purple-light/30"
                            } border-lovely-purple/30`}
                            onClick={() => setAmount(preset)}
                          >
                            {currency.symbol}{preset}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input
                          id="donation-amount"
                          className="pl-10 text-lg"
                          placeholder="Other amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-lovely-purple" />
                        <h3 className="text-lg font-bold">Payment Information</h3>
                      </div>
                      
                      <div className="border border-dashed border-lovely-purple/40 rounded-xl p-4 bg-lovely-purple-light/30 flex items-center">
                        <AlertCircle className="h-5 w-5 text-lovely-purple-dark mr-2 flex-shrink-0" />
                        <p className="text-sm text-lovely-gray-dark">
                          This is a demo version. In a real application, a secure payment gateway would be integrated here.
                        </p>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90 text-white py-6 text-lg">
                        <Heart className="h-5 w-5 mr-2 fill-white animate-pulse-gentle" />
                        Donate {amount ? `${selectedCurrency.symbol}${amount}` : "Now"}
                      </Button>
                      
                      <p className="text-center text-sm text-muted-foreground">
                        Your donation may be tax-deductible. A receipt will be emailed to you.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
