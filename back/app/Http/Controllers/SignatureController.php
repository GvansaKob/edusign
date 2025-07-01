<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Signature;

class SignatureController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'seance_id' => 'required|exists:seances,id',
            'statut' => 'required|boolean',
            'date' => 'required|date',
        ]);

        $signature = Signature::create($validated);

        return response()->json([
            'message' => 'Signature enregistrée',
            'data' => $signature
        ], 201);
    }
}
