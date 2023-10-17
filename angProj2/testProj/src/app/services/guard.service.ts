import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
export const mainpageguardGuard: CanActivateFn = () => {
  if(localStorage.getItem('abilities') == 'limited'){
    return true
  }
  return false
};

