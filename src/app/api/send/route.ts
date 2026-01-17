import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

// Configuración del transporter de Nodemailer con Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,         // Tu correo (el que ENVÍA)
        pass: process.env.GMAIL_APP_PASSWORD, // Tu contraseña de aplicación
    },
});

// Email que RECIBE las notificaciones (se configura en .env.local)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'Yoveracheroomayra@gmail.com';

interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, company, message } = body;

        // Validación básica
        if (!name || !email || !message) {
            return Response.json(
                { error: 'Nombre, email y mensaje son requeridos' },
                { status: 400 }
            );
        }

        // 1. Enviar correo de bienvenida al usuario que se registró
        await transporter.sendMail({
            from: `"BienEstarAPP" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: '¡Gracias por contactarnos! - BienEstarAPP',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0;">🌟 ¡Bienvenido/a!</h1>
                    </div>
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p style="font-size: 18px; color: #333;">Hola <strong>${name}</strong>,</p>
                        <p style="color: #666; line-height: 1.6;">
                            ¡Gracias por ponerte en contacto con nosotros! Hemos recibido tu mensaje y 
                            nos emociona que estés interesado/a en mejorar el bienestar de tu organización.
                        </p>
                        <div style="background: #e8f4fd; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0; border-radius: 5px;">
                            <p style="margin: 0; color: #333;"><strong>💬 Tu mensaje:</strong></p>
                            <p style="color: #555; font-style: italic;">"${message}"</p>
                        </div>
                        <p style="color: #666;">
                            Nuestro equipo revisará tu solicitud y te responderemos en las próximas 
                            <strong>24-48 horas hábiles</strong>.
                        </p>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p style="color: #999; font-size: 14px; text-align: center;">
                            Con cariño,<br>
                            <strong style="color: #667eea;">El equipo de BienEstarAPP</strong> 💚
                        </p>
                    </div>
                </div>
            `,
        });

        // 2. Enviar notificación a la administradora
        await transporter.sendMail({
            from: `"BienEstarAPP - Nuevo Contacto" <${process.env.GMAIL_USER}>`,
            to: ADMIN_EMAIL,
            replyTo: email,
            subject: `📬 Nuevo contacto: ${name} - BienEstarAPP`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0;">🔔 Nuevo Contacto</h1>
                    </div>
                    <div style="background: #1a1d29; padding: 30px; border-radius: 0 0 10px 10px; color: #fff;">
                        <p style="color: #ccc;">Tienes un nuevo mensaje desde el formulario de contacto:</p>
                        
                        <div style="background: #2d3142; padding: 20px; border-radius: 8px; margin: 15px 0;">
                            <p style="margin: 5px 0;"><span style="color: #9ca3af;">👤 Nombre:</span> <strong>${name}</strong></p>
                            <p style="margin: 5px 0;"><span style="color: #9ca3af;">📧 Email:</span> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
                            <p style="margin: 5px 0;"><span style="color: #9ca3af;">🏢 Empresa:</span> <strong>${company || 'No especificada'}</strong></p>
                        </div>
                        
                        <div style="background: #2d3142; padding: 20px; border-radius: 8px; border-left: 3px solid #10b981;">
                            <p style="color: #9ca3af; margin: 0 0 10px;">💬 Mensaje:</p>
                            <p style="color: #fff; margin: 0; line-height: 1.6;">${message}</p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 25px;">
                            <a href="mailto:${email}?subject=Re: Gracias por contactar a BienEstarAPP" 
                               style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); 
                                      color: white; text-decoration: none; padding: 12px 30px; border-radius: 25px; font-weight: bold;">
                                Responder ahora ✉️
                            </a>
                        </div>
                        
                        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
                            📅 ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima', dateStyle: 'full', timeStyle: 'short' })}
                        </p>
                    </div>
                </div>
            `,
        });

        return Response.json({
            success: true,
            message: '¡Mensaje enviado exitosamente!'
        });

    } catch (error) {
        console.error('Error sending emails:', error);
        return Response.json(
            {
                error: 'Error al enviar el mensaje',
                details: error instanceof Error ? error.message : 'Error desconocido'
            },
            { status: 500 }
        );
    }
}