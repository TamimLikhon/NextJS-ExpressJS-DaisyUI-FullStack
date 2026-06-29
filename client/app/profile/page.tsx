'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import SigninBtn from '@/components/SigninBtn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function ProfilePage() {
    const { status, data: session } = useSession();
    const [date, setDate] = useState<Date>();

    if (status === 'loading') {
        return <div className="flex justify-center items-center h-screen"><p>Loading profile...</p></div>;
    }

    if (status === 'unauthenticated') {
        return (
            <div className='flex flex-col items-center justify-center flex-1 bg-background px-4 py-12'>
                <SigninBtn />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-4xl min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-foreground">Your Profile</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar summary */}
                <div className="flex flex-col items-center p-6 border border-border rounded-lg bg-card h-fit w-full md:w-1/3">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={session?.user?.image as string} alt="Profile Picture" />
                        <AvatarFallback>{session?.user?.name?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">{session?.user?.name || 'User'}</h2>
                    <p className="text-muted-foreground mb-4">{session?.user?.email}</p>
                    <Button variant="outline" className="w-full">Change Picture</Button>
                </div>

                {/* Main Content Tabs */}
                <div className="w-full md:w-2/3">
                    <Tabs defaultValue="general" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="general" className="p-6 border border-border rounded-b-lg mt-0 border-t-0 rounded-t-none bg-card">
                            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" defaultValue={session?.user?.name || ''} />
                                </div>
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" defaultValue={session?.user?.email || ''} disabled />
                                </div>
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="dob"
                                                variant={"outline"}
                                                className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea id="bio" placeholder="Tell us a little bit about yourself" className="resize-none" />
                                </div>
                                
                                <Button className="mt-4">Save Changes</Button>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="settings" className="p-6 border border-border rounded-b-lg mt-0 border-t-0 rounded-t-none bg-card">
                            <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                            <p className="text-sm text-muted-foreground mb-4">Manage your account preferences and notification settings here.</p>
                            
                            <div className="space-y-4">
                                <Button variant="destructive">Delete Account</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
