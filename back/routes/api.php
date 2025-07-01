<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SignatureController;

Route::post('/signature', [SignatureController::class, 'store']);