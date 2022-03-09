<?php

namespace App\Controller;

use App\Service\RickAndMortyApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(Request $request): Response
    {
        return $this->json(['message' => "Hello"]);
    }

    #[Route('/mockApi', name: 'api_mockApi', methods: ['GET'])]
    public function mockApi(Request $request, RickAndMortyApiService $rickAndMortyApiService): Response
    {
        return $this->json($rickAndMortyApiService->loadApi());
    }
}
