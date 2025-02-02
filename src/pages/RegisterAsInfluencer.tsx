import React, { useState, ChangeEvent, FormEvent } from 'react';
import { LucideProps } from 'lucide-react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

// Types and Interfaces
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  primaryPlatform: string;
  instagramHandle: string;
  youtubeChannel: string;
  twitterHandle: string;
  facebookPage: string;
  followers: string;
  contentCategory: string;
  bio: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  onValueChange?: (value: string) => void;
  className?: string;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className = '', ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Input Component
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = '', type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

// Label Component
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className = '', ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  );
});
Label.displayName = "Label";

// Textarea Component
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = '', ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

// Select Components
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ children, onValueChange, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        onChange={(e) => onValueChange?.(e.target.value)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        {children}
      </select>
    </div>
  );
});
Select.displayName = "Select";

const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => children;
const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => children;
const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => (
  <option value={value}>{children}</option>
);
const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => <option value="">{placeholder}</option>;

// Card Components
const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle: React.FC<CardProps> = ({ className = '', ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription: React.FC<CardProps> = ({ className = '', ...props }) => (
  <p
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

// Main Component
const RegisterAsInfluencer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    primaryPlatform: '',
    instagramHandle: '',
    youtubeChannel: '',
    twitterHandle: '',
    facebookPage: '',
    followers: '',
    contentCategory: '',
    bio: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.primaryPlatform) newErrors.primaryPlatform = 'Primary platform is required';
    if (!formData.followers) newErrors.followers = 'Follower count is required';
    if (!formData.contentCategory) newErrors.contentCategory = 'Content category is required';
    
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to your backend
        console.log('Form submitted:', formData);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Registration successful! We will review your application and get back to you soon.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          primaryPlatform: '',
          instagramHandle: '',
          youtubeChannel: '',
          twitterHandle: '',
          facebookPage: '',
          followers: '',
          contentCategory: '',
          bio: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your application. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Register as an Influencer</CardTitle>
          <CardDescription>
            Join our community of creators and start monetizing your influence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryPlatform">Primary Platform</Label>
                <Select 
                  name="primaryPlatform" 
                  value={formData.primaryPlatform}
                  onValueChange={(value) => handleSelectChange(value, 'primaryPlatform')}
                >
                  <SelectValue placeholder="Select your main platform" />
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
                {errors.primaryPlatform && <p className="text-red-500 text-sm">{errors.primaryPlatform}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="followers">Total Followers</Label>
                <Input
                  id="followers"
                  name="followers"
                  value={formData.followers}
                  onChange={handleInputChange}
                  placeholder="Enter your follower count"
                />
                {errors.followers && <p className="text-red-500 text-sm">{errors.followers}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contentCategory">Content Category</Label>
                <Select 
                  name="contentCategory" 
                  value={formData.contentCategory}
                  onValueChange={(value) => handleSelectChange(value, 'contentCategory')}
                >
                  <SelectValue placeholder="Select your category" />
                  <SelectContent>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
                {errors.contentCategory && <p className="text-red-500 text-sm">{errors.contentCategory}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Social Media Handles</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <Input
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleInputChange}
                    placeholder="Instagram handle"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Youtube className="w-5 h-5" />
                  <Input
                    name="youtubeChannel"
                    value={formData.youtubeChannel}
                    onChange={handleInputChange}
                    placeholder="YouTube channel"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="w-5 h-5" />
                  <Input
                    name="twitterHandle"
                    value={formData.twitterHandle}
                    onChange={handleInputChange}
                    placeholder="Twitter handle"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Facebook className="w-5 h-5" />
                  <Input
                  name="facebookPage"
                  value={formData.facebookPage}
                  onChange={handleInputChange}
                  placeholder="Facebook page"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself and your content..."
              className="h-32"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </CardFooter>
    </Card>
  </div>
);
};

export default RegisterAsInfluencer;