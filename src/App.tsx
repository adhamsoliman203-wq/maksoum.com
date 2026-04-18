import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

// Official Category Data
const CATEGORIES = [
  { id: 'tshirts', name: 'T-SHIRTS', image: '/tshirt-main.jpg' },
  { id: 'hoodies', name: 'HOODIES', image: '/hoodie.jpg' },
  { id: 'jackets', name: 'JACKETS', image: '/jacket-blue.jpg' },
  { id: 'jeans', name: 'JEANS', image: '/jeans.jpg' },
  { id: 'sweatpants', name: 'SWEATPANTS', image: '/sweats.jpg' },
];

// Official Product Inventory
const products = [
  { id: 'tshirt-1', name: 'MAKSOUME CALLIGRAPHY TEE', price: 350, category: 'T-SHIRTS', image: '/tshirt-main.jpg' },
  { id: 'hoodie-1', name: 'COMIC GRAPHIC HOODIE', price: 599, category: 'HOODIES', image: '/hoodie.jpg' },
  { id: 'jacket-1', name: 'ZIP-UP LIGHT BLUE', price: 499, category: 'JACKETS', image: '/jacket-blue.jpg' },
  { id: 'jeans-1', name: 'BAGGY DENIM CALLIGRAPHY', price: 550, category: 'JEANS', image: '/tshirt-main.jpg' },
  { id: 'sweats-1', name: 'EYE GRAPHIC SWEATS BLACK', price: 550, category: 'SWEATPANTS', image: '/sweats.jpg' },
  // J'ai simplifié la liste pour tester, tu pourras rajouter les autres après !
];
