import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Olá! Sou a assistente virtual do Dr. Álex. Como posso ajudar você hoje? Posso falar sobre os serviços, agendamentos, ou tirar dúvidas sobre o atendimento.'
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: messages.slice(-10) // Últimas 10 mensagens
                })
            });

            const data = await response.json();

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.response
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Desculpe, estou com problemas de conexão. Tente novamente em alguns instantes.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50 group"
                aria-label="Abrir chat"
            >
                <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            </button>
        );
    }

    return (
        <div className={`fixed bottom-6 right-6 z-50 ${isMinimized ? 'w-72' : 'w-96'}`}>
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col border border-primary/10 overflow-hidden">
                {/* Header */}
                <div className="bg-primary text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <MessageCircle size={20} />
                        <div>
                            <h3 className="font-semibold text-sm">Assistente Virtual</h3>
                            <p className="text-xs text-white/80">Dr. Álex Cavalcante</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="hover:bg-white/20 p-1 rounded-lg transition"
                        >
                            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-lg transition"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 rounded-bl-none'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-2">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    disabled={loading}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={loading || !input.trim()}
                                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 text-center">
                                Pergunte sobre serviços, agendamentos ou tire dúvidas
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Chatbot;

