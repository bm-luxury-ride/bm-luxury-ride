
import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Calendar, Clock, MapPin, Car, User, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup_location: "",
    dropoff_location: "",
    date: "",
    time: "",
    vehicle_type: "",
    passengers: "1",
    special_requests: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const submitBooking = useMutation({
    mutationFn: async (data) => {
      await base44.integrations.Core.SendEmail({
        to: "bookings@bmluxuryride.com",
        subject: `New Booking Request from ${data.name}`,
        body: `
          New booking request received:
          
          Client Information:
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          
          Trip Details:
          Date: ${data.date}
          Time: ${data.time}
          Pickup: ${data.pickup_location}
          Drop-off: ${data.dropoff_location}
          
          Vehicle: ${data.vehicle_type}
          Passengers: ${data.passengers}
          
          Special Requests: ${data.special_requests || "None"}
        `
      });
      return data;
    },
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickup_location: "",
        dropoff_location: "",
        date: "",
        time: "",
        vehicle_type: "",
        passengers: "1",
        special_requests: ""
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBooking.mutate(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-black min-h-screen pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <Card className="bg-zinc-900/50 border-gold/20 text-center backdrop-blur-sm luxury-shadow">
            <CardContent className="p-16">
              <div className="w-24 h-24 bg-gold/10 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-14 h-14 text-gold" />
              </div>
              <h2 className="font-serif text-4xl font-light text-white mb-6">Reservation Received</h2>
              <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
                Thank you for choosing BM Luxury Ride. Our team will contact you within 30 minutes to confirm your reservation and finalize details.
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                className="bg-gold text-black hover:bg-gold-light font-semibold tracking-wider uppercase px-8 py-6"
              >
                Make Another Reservation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 elegant-border pt-12">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Reservation</span>
            <h1 className="font-serif text-6xl md:text-7xl font-light text-white mb-8 leading-tight">
              Reserve Your
              <span className="block text-gold italic">Luxury Experience</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Complete the form below and our concierge team will confirm your reservation within 30 minutes
            </p>
          </div>

          <Card className="bg-zinc-900/50 border-gold/20 backdrop-blur-sm luxury-shadow">
            <CardHeader className="border-b border-gold/20 p-8">
              <CardTitle className="font-serif text-3xl font-light text-white">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                      <User className="w-4 h-4 text-gold" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 py-6"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                      <Mail className="w-4 h-4 text-gold" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 py-6"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                    <Phone className="w-4 h-4 text-gold" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(469) 555-1234"
                    className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 py-6"
                  />
                </div>

                {/* Trip Details */}
                <div className="pt-8 border-t border-gold/20">
                  <h3 className="font-serif text-2xl font-light text-white mb-8">Journey Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="pickup" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                        <MapPin className="w-4 h-4 text-gold" />
                        Pickup Location *
                      </Label>
                      <Input
                        id="pickup"
                        required
                        value={formData.pickup_location}
                        onChange={(e) => handleChange("pickup_location", e.target.value)}
                        placeholder="Enter pickup address"
                        className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 py-6"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dropoff" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                        <MapPin className="w-4 h-4 text-gold" />
                        Destination *
                      </Label>
                      <Input
                        id="dropoff"
                        required
                        value={formData.dropoff_location}
                        onChange={(e) => handleChange("dropoff_location", e.target.value)}
                        placeholder="Enter destination address"
                        className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 py-6"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                          <Calendar className="w-4 h-4 text-gold" />
                          Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          className="bg-black/50 border-gold/20 text-white focus:border-gold transition-colors duration-300 py-6"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                          <Clock className="w-4 h-4 text-gold" />
                          Time *
                        </Label>
                        <Input
                          id="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => handleChange("time", e.target.value)}
                          className="bg-black/50 border-gold/20 text-white focus:border-gold transition-colors duration-300 py-6"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="vehicle" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                          <Car className="w-4 h-4 text-gold" />
                          Vehicle Selection *
                        </Label>
                        <Select value={formData.vehicle_type} onValueChange={(value) => handleChange("vehicle_type", value)}>
                          <SelectTrigger className="bg-black/50 border-gold/20 text-white focus:border-gold transition-colors duration-300 py-6">
                            <SelectValue placeholder="Select vehicle" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-900 border-gold/20">
                            <SelectItem value="executive_sedan">Executive Sedan</SelectItem>
                            <SelectItem value="luxury_suv">Luxury SUV</SelectItem>
                            <SelectItem value="stretch_limo">Stretch Limousine</SelectItem>
                            <SelectItem value="mercedes_s">Mercedes S-Class</SelectItem>
                            <SelectItem value="executive_sprinter">Executive Sprinter</SelectItem>
                            <SelectItem value="luxury_van">Luxury Van</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="passengers" className="text-white mb-3 block uppercase tracking-wider text-xs font-medium">
                          Passengers *
                        </Label>
                        <Select value={formData.passengers} onValueChange={(value) => handleChange("passengers", value)}>
                          <SelectTrigger className="bg-black/50 border-gold/20 text-white focus:border-gold transition-colors duration-300 py-6">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-900 border-gold/20">
                            {[...Array(12)].map((_, i) => (
                              <SelectItem key={i + 1} value={String(i + 1)}>
                                {i + 1} {i === 0 ? "passenger" : "passengers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requests" className="text-white flex items-center gap-2 mb-3 uppercase tracking-wider text-xs font-medium">
                        <MessageSquare className="w-4 h-4 text-gold" />
                        Special Requests
                      </Label>
                      <Textarea
                        id="requests"
                        value={formData.special_requests}
                        onChange={(e) => handleChange("special_requests", e.target.value)}
                        placeholder="Any specific requirements or requests?"
                        className="bg-black/50 border-gold/20 text-white placeholder:text-gray-600 focus:border-gold transition-colors duration-300 min-h-32"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={submitBooking.isPending}
                    className="w-full py-7 text-base bg-gold text-black hover:bg-gold-light transform hover:scale-[1.02] transition-all duration-300 font-semibold tracking-widest uppercase luxury-shadow"
                  >
                    {submitBooking.isPending ? "Processing..." : "Submit Reservation Request"}
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-6 font-light">
                    Our concierge team will confirm your booking within 30 minutes
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-3 font-light">Prefer to speak with our team?</p>
            <a href="tel:+14695551234" className="text-3xl font-light text-gold hover:text-gold-light transition-colors duration-300 font-serif">
              (469) 555-1234
            </a>
            <p className="text-gray-500 text-sm mt-3 uppercase tracking-wider">Available 24/7</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
