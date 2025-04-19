// 'use server';

// import {revalidatePath} from 'next/cache';

// import User from "@/database/models/user.model";
// import { connectToDatabase } from '../db';
// import {handleError} from "../utils";
// import {CreateUserParams, UpdateUserParams} from "@/types";

// // CREATE
// export async function createUser(user: CreateUserParams){
//     try{
//         await connectToDatabase();

//         const newUser = await User.create(user);

//         return JSON.parse(JSON.stringify(newUser));
//     }catch(err){
//         handleError(err);
//     }
// }

// //READ
// export async function  getUserById(userId:string){
//     try{
//         await connectToDatabase();
//         const user = await User.findOne({clerkId: userId});

//         if(!user) throw new Error("User not found");

//         return JSON.parse(JSON.stringify(user));
//     }catch(err){
//         handleError(err);
//     }
// }

// // UPDATE
// export async function updateUser(clerkId: string, user: UpdateUserParams){
//     try{
//         await connectToDatabase();

//         const updateUser = await User.findOneAndUpdate({clerkId}, user, {
//             new: true,
//         });

//         if(!updateUser) throw new Error("User update failed");

//         return JSON.parse(JSON.stringify(updateUser));
//     } catch(err){
//         handleError(err);
//     }
// }

// // DELETE
// export async function deleteUser(clerkId: string){
//     try{
//         await connectToDatabase();

//         // Find user to delete
//         const userToDelete = await User.findOne({clerkId});

//         if(!userToDelete){
//             throw new Error("User not found");
//         }

//         // Delete user
//         const deleteUser = await User.findByIdAndDelete(userToDelete._id);
//         revalidatePath("/");

//         return deleteUser ? JSON.parse(JSON.stringify(deleteUser)) : null;
//     } catch (err){
//         handleError(err);
//     }
// }